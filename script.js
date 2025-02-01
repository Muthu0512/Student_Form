const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
const subBtn = document.getElementById("subBtn");

let editIdx = null;

const deleteRow = (idx) => {
  studentTable.deleteRow(idx);
};

const editRow = (idx) => {
  const selectedCells = studentTable.rows[idx];
  document.getElementById("name").value = selectedCells.cells[0].textContent;
  document.getElementById("age").value = selectedCells.cells[1].textContent;
  document.getElementById("email").value = selectedCells.cells[2].textContent;
  document.getElementById("dob").value = selectedCells.cells[3].textContent;
  document.getElementById("gender").value = selectedCells.cells[4].textContent;
  editIdx = idx;
  subBtn.textContent = "Update";
};

const updateRow = (name, age, email, dob, gender) => {
  const updatedCells = studentTable.rows[editIdx];

  updatedCells.cells[0].textContent = name;
  updatedCells.cells[1].textContent = age;
  updatedCells.cells[2].textContent = email;
  updatedCells.cells[3].textContent = dob;
  updatedCells.cells[4].textContent = gender;

  subBtn.textContent = "submit";
};

const addRow = (name, age, email, dob, gender) => {
  const newRow = studentTable.insertRow();
  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = age;
  newRow.insertCell(2).textContent = email;
  newRow.insertCell(3).textContent = dob;
  newRow.insertCell(4).textContent = gender;

  const actionCells = newRow.insertCell(5);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.onclick = () => deleteRow(newRow.rowIndex - 1);
  deleteBtn.style.backgroundColor = "orangered";
  deleteBtn.style.color = "black";
  deleteBtn.style.padding = "5%";
  deleteBtn.style.borderRadius = "10%";
  deleteBtn.style.border = "none";
  deleteBtn.style.marginLeft = "5%";

  
  
  const editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.onclick = () => editRow(newRow.rowIndex - 1);
  editBtn.style.backgroundColor = "green";
  editBtn.style.color = "black";
  editBtn.style.padding = "5%";
  editBtn.style.borderRadius = "10%";
  editBtn.style.border = "none";
  editBtn.style.marginLeft = "5%";

  actionCells.appendChild(editBtn);
  actionCells.appendChild(deleteBtn);
};

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;

  if (editIdx != null) {
    updateRow(name, age, email, dob, gender);
  } else {
    addRow(name, age, email, dob, gender);
  }
  studentForm.reset();
});
