//validaciones en inicio de sesion
var f=document.getElementById('formulario');

f.addEventListener('submit', function (event) {
    const inEmail = document.getElementById("email").value;
    const inContra = document.getElementById("password").value;

    if ((inEmail != '') || (inContra != '')) {
        window.location.href = 'detalle.html';
    } else {
        alert('INGRESAR DATOS');
    }
});