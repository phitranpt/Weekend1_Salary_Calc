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
    let element = $('.myTable');
    element.empty();
    for (let person of employeeArray) {
        console.log(person.firstName);
        console.log(person.lastName);
        console.log(person.idNum);
        console.log(person.title);
        console.log(person.annualSalary);
        let firstTable = `<tr><td>${person.firstName}</td>`;
        let lastTable = `<td>${person.lastName}</td>`;
        let idTable = `<td>${person.idNum}</td>`;
        let titleTable = `<td>${person.title}</td>`;
        let annualSalaryTable = `<td>${person.annualSalary}</td></tr>`;
        let newRow = firstTable + lastTable + idTable + titleTable + annualSalaryTable;
        $('table tbody').append(newRow);
    }
}