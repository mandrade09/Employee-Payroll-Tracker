// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // array to store employee objects
  const employees = [];

  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = parseFloat(prompt("Enter employee's salary (without '$' sign):"));

  // default to 0 
    if (isNaN(salary)) {
      salary = 0;
    }

  // created employee object and added it to array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      addEmployee = false;
    }
  }

  return employees;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const numberOfEmployees = employeesArray.length;

  // average salary

  const averageSalary = totalSalary / numberOfEmployees;

  // log average salary and # of employees

  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD"})}`);
  console.log(`Number of Employees: ${numberOfEmployees}`);

}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee (assisted by TA in breakout room)

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  // logging first and last name separately of random employee  
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

  

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
function displayEmployees(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
