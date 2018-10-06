console.log('JS');

let employeeArray = [];

class Employee {
    constructor(firstName, lastName, idNum, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNum = idNum;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

$('document').ready(onReady);

function onReady() {
    console.log('JQ Works!');
    $('#addEmployeeButton').on('click', addEmployee);
}

//add employee function
function addEmployee() {
    event.preventDefault();
    console.log('addEmployee button works!');
    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let idNumIn = $('#idNum').val();
    let titleIn = $('#title').val();
    let annualSalaryIn = $('#annualSalary').val();
    let newEmployee = new Employee(firstNameIn, lastNameIn, idNumIn, titleIn, annualSalaryIn);
    employeeArray.push(newEmployee);
    console.log(employeeArray);
    appendEmployeeList();
}

//append employee into table
function appendEmployeeList() {
    let element = $('#firstNameTable');
    element.empty();
    for (let person of employeeArray) {
        console.log(person);
        element.append(person.firstName);
    }
}