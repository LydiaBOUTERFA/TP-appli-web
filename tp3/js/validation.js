$("#id_valider").click(function (event) {
    event.preventDefault();
    if ($("id_nom").val() != " " && $("id_prenom").val() != " " && $("id_date").val() != " " && $("id_adresse").val() != " " && $("id_mail").val() != " ") {
        $('myModal').modal({ show: true })
    }
});