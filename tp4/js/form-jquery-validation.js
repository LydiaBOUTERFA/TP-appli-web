$(document).ready(function() {
    //La validation du formulaire
    $("#mainForm").validate({
        rules: {
            nom: {
                required: true,
                minlength: 3
            },
            prenom: {
                required: true,
                minlength: 3
            },
            date: {
                required: true
            },
            adresse: {
                required: true
            },
            mail: {
                required: true,
                email: true
            }
        },
        messages: {
            nom: "Veuillez fournir un nom d'au moins trois lettres",
            prenom: "Veuillez fournir un prenom d'au moins trois lettres",
            date: "Veuillez fournir une date de naissance",
            adresse: "Veuillez fournir une adresse valide",
            mail: "L'email est incorrect"
        }
    });

    //Affichage du datepicker jQuery
    $("#id_date").datepicker({
        dateFormat: "dd-mm-yy",
        maxDate: " ",
    });

    $("#id_valider").on("click", function(event) {
        if ($("#mainForm").valid()) {
            //Enregistrer le contact dans un tableau JSON 
            contactStore.add($('#id_nom').val(), $('#id_prenom').val(), $('#id_date').val(), $('#id_adresse').val(), $('#id_mail').val());

            //Affichage des contacts dans le tableau
            $("#table_contact").html("");
            $("#table_contact").append(
                '<thead class="thead-dark">' +
                '<tr>' +
                '<th>Numéro de contact</th>' +
                '<th>Nom</th>' +
                '<th>Prénom</th>' +
                '<th>Date de naissance</th>' +
                '<th>Adresse</th>' +
                '<th>Mail</th>' +
                '</tr>' +
                '</thead>'
            );
            for (var i in contactStore.getList()) {
                $("#table_contact").append(
                    '<tr>' +
                    '<th scope="row">' + i + '</th>' +
                    '<td>' + contactStore.getList()[i].nom + '</td>' +
                    '<td>' + contactStore.getList()[i].prenom + '</td>' +
                    '<td>' + contactStore.getList()[i].date + '</td>' +
                    '<td>' + contactStore.getList()[i].adresse + '</td>' +
                    '<td>' + contactStore.getList()[i].mail + '</td>' +
                    '</tr>'
                );
            }
        }
    });
});

//Affiche le nombre de caractères saisis 
$(document).ready(function(e) {
    $('#id_nom').keyup(function() {

        var nombreCaractere = $(this).val().length;

        var msg = ' ' + nombreCaractere + ' Caractere(s)';
        $('#compteur_nom').text(msg);
    })

    $('#id_prenom').keyup(function() {

        var nombreCaractere = $(this).val().length;

        var msg = ' ' + nombreCaractere + ' Caractere(s)';
        $('#compteur_prenom').text(msg);
    })
});