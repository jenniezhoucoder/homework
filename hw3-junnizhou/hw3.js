/*
Question 1
1. Given the following array and implement the table dynamically(you need to create the table via JavaScript)
2. And then you should implement a form(focus on the logic only, you DON'T need to create the form via JavaScript) for taking the some format input form users(Student Name，Age，Phone,Address). When the user clicks the Add button, the data will be added into the existing table(after the existing data), and the user input in the form should be cleared. 
*/

const tableInfo = {
    tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
    tableContent: [
      {
        'Student Name': 'John',
        Age: 19,
        Phone: '455 - 983 - 0903',
        Address: '123 Ave, San Francisco, CA, 94011',
      },
      {
        'Student Name': 'Alex',
        Age: 21,
        Phone: '455 - 983 - 0912',
        Address: '456 Rd, San Francisco, CA, 94012',
      },
      {
        'Student Name': 'Josh',
        Age: 22,
        Phone: '455 - 345 - 0912',
        Address: '789 Dr, Newark, CA, 94016',
      },
      {
        'Student Name': 'Matt',
        Age: 23,
        Phone: '321 - 345 - 0912',
        Address: '223 Dr, Sunnyvale, CA, 94016',
      },
    ],
  };


  const table = document.getElementById("table");
  const headerRow = document.getElementById("header");
  const tableBody = document.getElementById("body");
  const addButton = document.getElementById("addButton");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const phoneInput = document.getElementById("phone");
  const addressInput = document.getElementById("address");



  function createTable(data) {
    headerRow.innerHTML = data.tableHeader.map(header => `<th>${header}</th>`).join("");
    data.tableContent.forEach(row => {
      const curRow = document.createElement("tr");
      Object.values(row).forEach(value => {
        const cell = document.createElement("td");
        cell.innerText = value;
        curRow.appendChild(cell);
      });
      tableBody.appendChild(curRow);
    });
  }

  function createNewRow() {

    const newRow = document.createElement("tr");

    const studentNameCell = document.createElement("td");
    studentNameCell.innerText = nameInput.value;
    newRow.appendChild(studentNameCell);

    const ageCell = document.createElement("td");
    ageCell.innerText = ageInput.value;
    newRow.appendChild(ageCell);

    const phoneCell = document.createElement("td");
    phoneCell.innerText = phoneInput.value;
    newRow.appendChild(phoneCell);

    const addressCell = document.createElement("td");
    addressCell.innerText = addressInput.value;
    newRow.appendChild(addressCell);

    tableBody.appendChild(newRow);

    nameInput.value = "";
    ageInput.value = "";
    phoneInput.value = "";
    addressInput.value = "";

  }

addButton.addEventListener("click", createNewRow);
createTable(tableInfo);

  
  /*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */
  
  const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java'];

  const unordered = document.getElementById("unordered");
  for (let i = 0; i < list.length; i++) {
    const item = document.createElement("li");
    item.textContent = list[i];
    unordered.appendChild(item);
  }

  const ordered = document.getElementById("ordered");
  for (let i = 0; i < list.length; i++) {
    const item = document.createElement("li");
    item.textContent = list[i];
    ordered.appendChild(item);
  }

  
  /*
  Question 3
  1. Given the array and implement a dropdown list with the following options dynamically 
  2. Console the value, when the user select one option
  */
  
  const dropDownList = [
    { value: '', content: 'Please select' },
    { value: 'newark', content: 'Newark' },
    { value: 'santaClara', content: 'Santa Clara' },
    { value: 'unionCity', content: 'Union City' },
    { value: 'albany', content: 'Albany' },
    { value: 'dalyCity', content: 'Daly City' },
    { value: 'sanJose', content: 'San Jose' },
  ];

  const dropDown = document.getElementById("select");

  dropDownList.forEach(option => {
    const listOption = document.createElement("option");
    listOption.value = option.value;
    listOption.textContent = option.content;
    dropDown.appendChild(listOption);
  });


  dropDown.addEventListener('change', event => {
    console.log(event.target.value);
  });





