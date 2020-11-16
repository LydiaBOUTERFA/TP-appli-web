$(document).ready(function () {
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
//La pop-up
    $("#id_valider").on("click", function (event) {
        if ($("#mainForm").valid()) {

            var city = $("#id_adresse").val();

            $(".modal-title").html('Bienvenue ' + $("#id_prenom").val());

            $(".modal-body").html('Vous etes né(e) le ' + $("#id_date").val() + ' et vous habitez' 
            + `<a href="https://www.google.fr/maps/" target="_blank">
            <img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>
            </a> ` +$("#id_adresse").val());

            $("#myModal").modal("show");
        }
        
    });
//Pour la date
    $("#id_date").datepicker({
        dateFormat: "dd-mm-yy",
        maxDate: " ",
    });

});

/*$(document).ready("use strict", function(){
    $(window).click('loaad', function(){
        var forms = $(".needs-validation").val();
    });
});
$on("use strict", function() {    ;
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();*/


