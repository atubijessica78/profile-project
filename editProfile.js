const modal_container = document.getElementById("business-modal");
const close = document.querySelectorAll(".close");
const saveChanges = document.getElementById("save-changes");
const open = document.getElementById("open");
const open1 = document.getElementById("open-1");

if (open && modal_container) {
  open.addEventListener("click", () => {
    modal_container.classList.add("show");
  });
}

if (open1 && modal_container) {
  open1.addEventListener("click", () => {
    modal_container.classList.add("show");
  });
}
close.forEach((button) => {
  button.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });
});
saveChanges.addEventListener("click", () => {
  const firstName = document.getElementById("modal-first-name").value;
  const lastName = document.getElementById("modal-last-name").value;
  const country = document.getElementById("modal-country").value;
  const city = document.getElementById("modal-city").value;
  const email = document.getElementById("modal-email").value;
  const phone = document.getElementById("modal-phone").value;

  // Update personal information section
  document.getElementById(
    "personal-name"
  ).textContent = `${firstName} ${lastName}`;
  document.getElementById(
    "personal-location"
  ).textContent = `${city}, ${country}`;
  document.getElementById("personal-email").textContent = email;
  document.getElementById("personal-phone").textContent = phone;

  modal_container.classList.remove("show");
});

// ------- Edit Business Information ------

const openBusiness = document.getElementById("open-business");
const openBusiness1 = document.getElementById("open-business-1");
const business_modal_container = document.getElementById(
  "edit-business-information"
);
const btns = document.querySelectorAll(".close-business");
const saveBusinessChanges = document.getElementById("save-business-changes");

if (openBusiness && business_modal_container) {
  openBusiness.addEventListener("click", () => {
    business_modal_container.classList.add("show");

    document.body.style.overflow = "hidden";
  });
}

if (openBusiness1 && business_modal_container) {
  openBusiness1.addEventListener("click", () => {
    business_modal_container.classList.add("show");

    document.body.style.overflow = "hidden";
  });
}
for (const btn of btns) {
  btn.addEventListener("click", function () {
    business_modal_container.classList.remove("show");
    document.body.style.overflow = "scroll";
  });
}

saveBusinessChanges.addEventListener("click", () => {
  const businessName = document.getElementById(
    "business-modal-business-name"
  ).value;
  const Country = document.getElementById("business-modal-country").value;
  const State = document.getElementById("business-modal-state").value;
  const City = document.getElementById("business-modal-city").value;
  const Zipcode = document.getElementById("business-modal-zipcode").value;
  const Address = document.getElementById("business-modal-address").value;
  const Email = document.getElementById("business-modal-email").value;
  const Phone = document.getElementById("business-modal-phone").value;
  const Website = document.getElementById("business-modal-website").value;
  const Currency = document.getElementById(
    "business-modal-in-app-currency"
  ).value;
  const timeZone = document.getElementById("business-modal-time-zone").value;

  // Update business information section
  document.getElementById("business-name").textContent = businessName;
  document.getElementById(
    "business-location"
  ).textContent = `${City}, ${Country}`;
  document.getElementById("business-address").textContent = Address;
  document.getElementById("business-email").textContent = Email;
  document.getElementById("business-currency").textContent = Phone;
  document.getElementById("business-website").textContent = Website;
  document.getElementById("business-city").textContent = `${City} , ${Zipcode}`;
  document.getElementById("business-phone").textContent = Phone;
  document.getElementById("business-timezone").textContent = timeZone;

  business_modal_container.classList.remove("show");
  document.body.style.overflow = "scroll";
});

// ------ Add Team section ------

const teamModalContainer = document.getElementById("add-team-modal");
const saveTeamChanges = document.getElementById("send-invitation");
const openTeamModal = document.getElementById("open-team-modal");

// ----------------- Add Team Member Modal ---------
const addTeamModalContainer = document.getElementById("add-team-modal");
const teamRoleContainer = document.getElementById("dropdown-team-roles");
const dropDownContainer = document.getElementById("dropdown-container");
const roleInput = document.getElementById("add-team-modal-role");
const closeAddTeamModal = document.getElementById("close-add-team-modal");
const addTeamForm = document.getElementById("add-team-form");

openTeamModal.addEventListener("click", () => {
  teamModalContainer.classList.add("show");
  document.body.style.overflow = "hidden";
});

// ---------close modal --------
closeAddTeamModal.addEventListener("click", () => {
  addTeamForm.reset();
  teamModalContainer.classList.remove("show");
  document.body.style.overflow = "scroill";
});

//------ Toggle dropdown visibility   ------
teamRoleContainer.addEventListener("click", () => {
  dropDownContainer.classList.toggle("show");
});

// ------Add event listener to each list item-----
const listItems = dropDownContainer.querySelectorAll("ul li");
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    roleInput.value = item.textContent; // Set input field value to the selected item text
    teamRoleContainer.label.value = item.textContent;
    dropDownContainer.classList.remove("show"); // Hide the dropdown after selection
  });
});

saveTeamChanges.addEventListener("click", () => {
  const email = document.getElementById("add-team-modal-email").value;
  const Role = document.getElementById("add-team-modal-role").value;
  console.log(Role);
});
