$.pages["Staff List"] = (() => {

const load = ($in, $cb) => {
	$.db.query("staff_list_read", {}, ($d) => {
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
			let tr = document.createElement("tr"); table.appendChild(tr);
			let td = document.createElement("td"); tr.appendChild(td); td.textContent = "Name";
			
			$d[0].forEach($v2 => {
				let td = document.createElement("td"); tr.appendChild(td); td.textContent = $v2.Mask;
			});
			
		};
		
		let tr = document.createElement("tr"); table.appendChild(tr);
		let td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.Name + " - " + $.Role;
				
		$d[0].forEach($v2 => {
			
			let td = document.createElement("td"); tr.appendChild(td);
			if ($v.Data[$v2.Mask] !== undefined) td.textContent = $v.Data[$v2.Mask].Date;
			
			td.appendChild(document.createTextNode(" "));
			
			let button = document.createElement("button"); td.appendChild(button);
			button.className = "faR";
			button.textContent = "";
			bbutton.ngstyle = {"background-color":"transparent", "border":"0"};
			button.ngpointerdown = () => {
				if ($.db.signedIn() === false) { $.nav.goTo("Sign In"); return; };
				$.db.query("fit_test_create", {EmployeeNo:$v.EmployeeNo, Mask:$v2.Mask}, $d => { build($d); });
			};
			
		});
		
	});

};

return load;

})();
