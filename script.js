let users = [
  {
    id: "123456789",
    createdDate: "06-01-2021",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
    action: "",
  },
  {
    id: "987654321",
    createdDate: "25-07-2021",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
    action: "",
  },
  {
    id: "852963741",
    createdDate: "15-09-2021",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
    action: "",
  },
];

const mytable = document.getElementById("table");

users.forEach((user) => {
  let newRow = document.createElement("tr");
  Object.values(user).forEach((value) => {
    let cell = document.createElement("td");
    cell.innerText = value;
    newRow.appendChild(cell);
    newRow.classList.add("cell1");
    newRow.appendChild(cell);
    cell.classList.add(user.id);
    if (cell.innerHTML === "") {
      users.forEach((personId) => {
        cell.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        cell.classList.add("trash");
      });
    }
    if (cell.innerHTML === "En validation") {
      cell.classList.add("enValidation");
    }
    if (cell.innerHTML === "Validé") {
      cell.classList.add("Validé");
    }
    if (cell.innerHTML === "Rejeté") {
      cell.classList.add("Rejeté");
    }
    const deleteUser = document.querySelectorAll(".trash");
    deleteUser.forEach((icon) => {
      icon.addEventListener("click", () => {
        let index;
        for (let i = 0; i < mytable.rows.length; i++) {
          mytable.rows[i].onclick = function () {
            index = this.rowIndex;
            mytable.deleteRow(index);
            console.log(index);
          };
        }
      });
    });
  });
  mytable.appendChild(newRow);
});

const form = document.querySelectorAll(".form");
const submitInput = document.querySelector(".submit");
let arrayOfUsers = [];
const getDataForm = (e) => {
  e.preventDefault();
  let newUser = {
    id: Date.now(),
    createdDate: document.getElementById("date").value,
    status: document.getElementById("stat").value,
    firstName: document.getElementById("name").value,
    lastName: document.getElementById("lastName").value,
    userName: document.getElementById("userName").value,
    registrationNumber: document.getElementById("matricule").value,
    action: "",
  };
  arrayOfUsers.push([...arrayOfUsers, newUser]);
  document.forms[0].reset();

  const rowCount = mytable.rows.length;
  const row = mytable.insertRow(rowCount);

  const cell1 = row.insertCell(0);
  cell1.innerHTML = newUser.id;

  const cell2 = row.insertCell(1);
  cell2.innerHTML = newUser.createdDate;

  const cell3 = row.insertCell(2);
  cell3.innerHTML = newUser.status;

  const cell4 = row.insertCell(3);
  cell4.innerHTML = newUser.firstName;

  const cell5 = row.insertCell(4);
  cell5.innerHTML = newUser.lastName;

  const cell6 = row.insertCell(5);
  cell6.innerHTML = newUser.userName;

  const cell7 = row.insertCell(6);
  cell7.innerHTML = newUser.registrationNumber;

  const cell8 = row.insertCell(7);
  cell8.innerHTML = `<i class="fa-solid fa-trash-can "></i>`;
  cell8.classList.add("trash");

  form_container.classList.toggle("popUp");
};

const deleteUser = document.querySelectorAll(".trash");
deleteUser.forEach((icon) => {
  icon.addEventListener("click", () => {
    let index;
    for (let i = 0; i < mytable.rows.length; i++) {
      mytable.rows[i].onclick = function () {
        index = this.rowIndex;
        mytable.deleteRow(index);
        console.log(index);
      };
    }
  });
});
submitInput.addEventListener("click", getDataForm);

const showForm = document.querySelector(".showForm");
const form_container = document.querySelector(".form_container");
showForm.addEventListener("click", () => {
  form_container.classList.toggle("popUp");
});
