const form = document.querySelector(".form");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const phone = document.querySelector("#phone");

const cards = document.querySelector(".cards");

const CreateCard = function (arg1, arg2, arg3, arg4) {
  return `<div class="card">
    <div class="left">
        <input type="checkbox" name="" id="">
        <span class="ul">
            <ul>
                <li>Name:</li>
                <li>Surname:</li>
                <li>Age:</li>
                <li>Phone:</li>
            </ul>
            <ul class="form_save">
                <li>${arg1}</li>
                <li>${arg2}</li>
                <li>${arg3}</li>
                <li>${arg4}</li>
            </ul>

        </span>
    </div>

    <div class="right">
        <button>
            <i class="fa-regular fa-pen-to-square"></i>
            <span>Edit</span>
        </button>

        <button>
            <i class="fa-solid fa-trash-can"></i>
            <span>Del</span>
        </button>

    </div>

</div>`;
};

const nameLi = document.querySelector(".ul .form_save li:nth-child(1)");
const surnanameLi = document.querySelector(".ul .form_save li:nth-child(2)");
const ageLi = document.querySelector(".ul .form_save li:nth-child(3)");
const phoneLi = document.querySelector(".ul .form_save li:nth-child(4)");

const save = function (name, surname, age, phone) {
  const cardInfo = {
    name: name.value,
    surname: surname.value,
    age: age.value,
    phone: phone.value,
  };

  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }

  data.push(cardInfo);
  localStorage.setItem("todos", JSON.stringify(data));

  const card = CreateCard(
    cardInfo.name,
    cardInfo.surname,
    cardInfo.age,
    cardInfo.phone
  );
  cards.innerHTML += card;
  name.value = "";
  surname.value = "";
  age.value = "";
  phone.value = "";
  name.focus();
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  save(name, surname, age, phone);
  nameLi.textContent = name.value;
  surnanameLi.textContent = surname.value;
  ageLi.textContent = age.value;
  phoneLi.textContent = phone.value;
});

document.addEventListener("DOMContentLoaded", function () {
  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }

  if (data.length > 0) {
    data.forEach((value) => {
        const card = CreateCard(
            value.name,
            value.surname,
            value.age,
            value.phone
          );
      cards.innerHTML += card;
    });
  }
});
