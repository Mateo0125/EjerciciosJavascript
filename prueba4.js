let department = prompt("A que departamento le quiere conocer la capital?");

department = department.toLowerCase();

switch (department) {
    case "amazonas":
        alert("Capital Leticia");
        break;
    case "antioquia":
        alert("Capital Medellin");
        break;
    case "arauca":
        alert("Capital Barranquilla");
        break;
    case "bolivar":
        alert("Capital Cartagena de indias");
        break;
    case "boyaca":
        alert("Capital Tunja");
        break;
    case "Caldas":
        alert("Capital Manizales");
        break;
    case "caqueta":
        alert("Capital Florencia");
        break;
    case "casanare":
        alert("Capital Yopal");
        break;
    case "cauca":
        alert("Capital Popayan");
        break;
    case "cesar":
        alert("Capital Valledupar");
        break;
    case "choco":
        alert("Capital Quibdo");
        break;
    case "Cordoba":
        alert("Capital Monteria");
        break;
    case "Cundinamarca":
        alert("Capital Bogota");
        break;
    case "guainia":
        alert("Capital San jose del guaviare");
        break;
    case "Huila":
        alert("Capital Neiva");
        break;
    case "la guajira":
        alert("Capital Rioacha");
        break;
    case "magdalena":
        alert("Capital Santa marta");
        break;
    case "meta":
        alert("Capital Villavicencio");
        break;
    case "nariño":
        alert("Capital San juan de pasto");
        break;
    case "norte de santander":
        alert("Capital San jose de cucuta");
        break;
    case "putumayo":
        alert("Capital Mocoa");
        break;
    case "quindio":
        alert("Capital Armenia");
        break;
    case "Risaralda":
        alert("Capital Pereira");
        break;
    case "san andres y providencia":
        alert("Capital San andrés");
        break;
    case "santander":
        alert("Capital Bucaramanga");
        break;
    case "sucre":
        alert("Capital Sincelejo");
        break;
    case "tolima":
        alert("Capital Ibagué");
        break;
    case "valle del cauca":
        alert("Capital Cali");
        break;
    case "vaupes":
        alert("Capital Mitú");
        break;
    case "vichada":
        alert("Capital Puerto carreño");
        break;

    default:
        alert("Ingresaste un departamento no existente en Colombia");
        break;
}