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
    $('#addEmployeeButton').on('click', appendEmployeeList);
    $('#addEmployeeButton').on('click', averageCost);
    $('.myTable').on('click', '#delete', deleteEmployee);
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
    let newEmployee = new Employee(firstNameIn, lastNameIn, idNumIn, titleIn, parseInt(annualSalaryIn) );
    employeeArray.push(newEmployee);
    console.log(employeeArray);
    clearInput();
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
        let annualSalaryTable = `<td>${person.annualSalary.toLocaleString()}</td>`;
        let deleteButton = `<td><button id="delete">Delete</button></td></tr>`;
        let newRow = firstTable + lastTable + idTable + titleTable + annualSalaryTable + deleteButton;
        $('table tbody').append(newRow);
    }
}

//clear input
function clearInput() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNum').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}

//add annual salary and get monthly cost
function averageCost() {
    let element2 = $('#totalCost')
    element2.empty();
    let total = 0;
    for (let sum of employeeArray) {
        total += (sum.annualSalary/12);
        console.log(total);
        //if over $20,000
        if (total>20000) {
            console.log('over budget!');
            $('#totalCost').parent().toggleClass('overBudget');
        }  
    } 
    $('#totalCost').append(`Total Monthly: $` + ` ${total.toFixed(2)}`);
}

//delete employee
function deleteEmployee() {
    console.log('delete button works!');
    let selectedItem = $(this).closest('tr').find('td').text();;
    console.log(selectedItem);  
    for (let i=0; i<employeeArray.length; i++) {
        if (selectedItem.includes(employeeArray[i].firstName)) {
            employeeArray.splice(i,1);
            $(this).closest('tr').find('td').remove();
            return true;
        }
    }
}
