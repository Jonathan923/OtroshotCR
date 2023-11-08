let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var isValid = true;

    if (nombre.trim() === "") {
        document.getElementById("nombre-error").innerText = "El nombre es obligatorio";
        isValid = false;
    } else {
        document.getElementById("nombre-error").innerText = "";
    }

    if (email.trim() === "") {
        document.getElementById("email-error").innerText = "El correo electrónico es obligatorio";
        isValid = false;
    } else {
        document.getElementById("email-error").innerText = "";
    }
    if (Numero.trim() === "") {
        document.getElementById("Numero-error").innerText = "El Numero Telefonico es obligatorio";
        isValid = false;
    } else {
        document.getElementById("Numero-error").innerText = "";
    }

    if (mensaje.trim() === "") {
        document.getElementById("mensaje-error").innerText = "El mensaje es obligatorio";
        isValid = false;
    } else {
        document.getElementById("mensaje-error").innerText = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});