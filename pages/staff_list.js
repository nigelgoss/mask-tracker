$.pages["Staff List"] = (() => {

const load = ($in, $cb) => {
	$.db.query("staff_list", {}, ($d) => {
		build($d);
		$cb(main);
	});
};

const main = document.createElement("main");

const build = ($d) => {

	main.textContent = "";
	
	let department = null;
	let table;
	$d[1].forEach($v => {
		
		if (department !== $v.Department) {
			department = $v.Department;
			let fieldset = document.createElement("fieldset"); main.appendChild(fieldset);
			let legend = document.createElement("legend"); fieldset.appendChild(legend);
			legend.textContent = $v.Department;
			table = document.createElement("table"); fieldset.appendChild(table);
			table.ngstyle = {"width":"100%"};
		};
		
		let tr = document.createElement("tr"); table.appendChild(tr);
		let td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.Name + " - " + $.Role;
				
		$d[0].forEach($v2 => {
			let td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.Data[$v2.Mask].Date;
		});
		
	});

};

return load;

})();
