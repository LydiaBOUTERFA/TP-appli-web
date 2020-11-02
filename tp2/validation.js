// JavaScript source code
function validation() {

	//Remise à zéro de l\'affichage
	document.getElementById("resultat").classList.remove("visible");
	document.getElementById("error").classList.remove("visible");

	//Liste des variables
	var length_nom = document.getElementById("nom").value.length;
	var length_prenom = document.getElementById("prenom").value.length;
	var length_date = document.getElementById("date").value.length;
	var length_adresse = document.getElementById("adresse").value.length;
	var length_mail = document.getElementById("mail").value.length;


	//Conditions 
	//Test sur le nom
	if(length_nom==0 && length_prenom==0 && length_date== 0 && length_adresse==0 && length_mail==0 ){
		document.getElementById("error").classList.add("visible");
	}
	else if(length_nom < 5 || length_nom == 0) {	
		document.getElementById("error").classList.add("visible");
		document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";

		//Test sur le prenom
	} else if(length_prenom < 5 || length_prenom == 0) {
		document.getElementById("error").classList.add("visible");
		document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";
	} //Test sur la date 
	else if (length_date ==0 ) {
		document.getElementById("error").classList.add("visible");
		document.getElementById("error").innerHTML = "La saisie de la date est obligatoire";
	}//Test sur l'adresse 
	else if (length_adresse < 5 || length_adresse == 0) {
		document.getElementById("error").classList.add("visible");
		document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
	}//Test sur l'adresse mail
	else if (length_mail < 5 || length_mail == 0 ) {
		document.getElementById("error").classList.add("visible");
		document.getElementById("error").innerHTML = "La saisie de l'adresse mail est obligatoire";
	} 
	else {
		document.getElementById("resultat").classList.add("visible");
		document.getElementById("resultat").innerHTML = "Bienvenue " 
						+ document.querySelector("#prenom").value + " " + document.querySelector("#nom").value;
	}
}

