const btnUser = document.getElementById("btnUser");
const employee = document.getElementById("Employee");
const employeeSalary = document.getElementById("Salary");

const userData = () => {
    let employeeName = prompt("Ingrese su nombre");
    let salary = prompt("Ingrese por favor su salario");

    employee.innerHTML = "Nombre del empleado/a: " + employeeName;
    employeeSalary.innerHTML = "Salario: $" + salary;
};

btnUser.onclick = () => {
    userData();
};