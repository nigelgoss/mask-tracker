$.db = (() => {

let session = null;
	
const query = ($qry, $params = {}, $success) => {

	if (session === null && document.querySelector("#username") !== null && document.querySelector("#password") !== null) {
		let u = document.querySelector("#username").value;
		let p = document.querySelector("#password").value;
		session = JSON.stringify([u, p]);
		u = "";
		p = "";
	};
	
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== 4) return;
		if (xhr.status === 200) {
			$success(JSON.parse(xhr.responseText));
		} else if (xhr.status === 401) {
			session = null;
			alert("Unauthorised");
			$.nav.goTo("Sign In");
		};
		spinner(false);
	};
	xhr.open("GET", "!/"+$qry+".sql", true);
	xhr.setRequestHeader("auth", session);
	xhr.send(JSON.stringify([$qry, $params]));
	spinner(true);
	
};

const signedIn = () => {
	return session !== null;
}
	
const spinner = ($status) => {
	if ($status === true) { document.body.appendChild(spinnerDiv); } else { spinnerDiv.remove(); };
};

const spinnerDiv = document.createElement("div");
spinnerDiv.ngstyle = {"position":"absolute", "top":"0", "left":"0", "width":"100%", "height":"100%", "place-items":"center", "display":"grid"};
let img = document.createElement("img"); spinnerDiv.appendChild(img);
img.src = "resources/spinner.png";
img.ngstyle = {"animation":"transformRotate 2s infinite linear"};

return {
	query: query,
	signedIn: signedIn,
};
  
})();
