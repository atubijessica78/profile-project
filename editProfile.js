const modal_container = document.getElementById("business-modal");
const close = document.querySelectorAll(".close");
const saveChanges = document.getElementById("save-changes");
const open = document.getElementById("open");

if (open && modal_container) {
  open.addEventListener("click", () => {
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

const open_Business = document.getElementById("open-business");
const business_modal_container = document.getElementById(
  "edit-business-information"
);
const save_business_changes = document.getElementById("save-business-changes");

if (open_Business && business_modal_container) {
  open_Business.addEventListener("click", () => {
    business_modal_container.classList.add("show");

    // document.body.style.overflow = "hidden";
  });
}
