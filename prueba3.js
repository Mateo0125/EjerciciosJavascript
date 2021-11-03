let word = prompt(
    "Cual palabra de las mostradas desea traducir? \n -Casa \n -Mesa \n -Perro \n -Gato"
);
word = word.toLowerCase();

switch (word) {
    case "casa":
        alert("Casa = House");
        break;
    case "mesa":
        alert("Mesa = Table");
        break;
    case "perro":
        alert("Perro = Dog");
        break;
    case "gato":
        alert("Gato = Cat");
        break;

    default:
        alert("No escribiste correctamente ninguna de las 4 opciones dadas");
        break;
}