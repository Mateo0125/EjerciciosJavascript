// local storage

const btnUser = document.getElementById("btnUser");
const Welcome = document.getElementById("Welcome");
// funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    let userLastName = prompt("Ingresa tu apellido");
    let age = prompt("Ingresa tu edad");
    let userPhone = prompt("Ingresa tu número telefonico");
    let userCellphone = prompt("Ingresa tu número de celular");
    let address = prompt("Ingresa tu dirección");

    // el inner funciona para asignar o sobreescribir un valor en el html
    Welcome.innerHTML = "Bienvenido/a : " + userName;
    localStorage.setItem("name", userName);
    localStorage.setItem("lastName", userLastName);
    localStorage.setItem("age", age);
    localStorage.setItem("userPhone", userPhone);
    localStorage.setItem("userCellphone", userCellphone);
    localStorage.setItem("address", address);
};

if (localStorage.getItem("name")) {
    Welcome.innerHTML = "Bienvenido/a : " + localStorage.getItem("name");
}
// evento
btnUser.onclick = () => {
    userData();
};