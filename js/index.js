/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/
const url = "./public/data/contacts.json";
let contactsList = [];
let container = document.querySelector(".text-start");

async function getContacts(url) {
  const res = await fetch(url);
  const payload = await res.json();
  contactsList = payload;
  //console.log(contactsList);

  renderContacts();
}

getContacts(url);

function renderContacts() {
  container.innerHTML = "";
  contactsList.forEach((contact) => {
    const template = `
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${contact.name}</h5>
    </div>
  <small>${contact.email}</small>
  </div>`;
    container.insertAdjacentHTML("beforeend", template);
  });
}
