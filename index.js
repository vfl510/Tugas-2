//button
const editButton = document.getElementById("editButton");
const editForm = document.getElementById("form");

//form items
const formName = document.getElementById("formName");
const formRole = document.getElementById("formRole");
const formAvailability = document.getElementById("formAvailability");
const formUsia = document.getElementById("formUsia");
const formLokasi = document.getElementById("formLokasi");
const formPengalaman = document.getElementById("formPengalaman");
const formEmail = document.getElementById("formEmail");
const formImage = document.getElementById("formImage");
const submitButton = document.getElementById("submitButton");

//target items
const nameTarget = document.getElementById("nameTarget");
const roleTarget = document.getElementById("roleTarget");
const availabilityTarget = document.getElementById("availabilityTarget");
const usiaTarget = document.getElementById("usiaTarget");
const lokasiTarget = document.getElementById("lokasiTarget");
const pengalamanTarget = document.getElementById("pengalamanTarget");
const emailTarget = document.getElementById("emailTarget");
const imageTarget = document.getElementById("imageTarget");

//assign function to edit button
editButton.addEventListener("click", toggleEditForm);
submitButton.addEventListener("click", mySubmitButton);

function toggleEditForm(event) {
  editForm.classList.toggle("hide-content");
}

function mySubmitButton(event) {
  //prevent event bubbling JS
  event.preventDefault();
  // get all values
  const currentName = formName.value;
  const currentRole = formRole.value;
  const currentAvailability = formAvailability.value;
  const currentUsia = formUsia.value;
  const currentLokasi = formLokasi.value;
  const currentPengalaman = formPengalaman.value;
  const currentEmail = formEmail.value;
  const currentFile = formImage.files[0];

  //set value to target
  nameTarget.innerHTML = currentName;
  roleTarget.innerHTML = currentRole;
  availabilityTarget.innerHTML = currentAvailability;
  usiaTarget.innerHTML = currentUsia;
  lokasiTarget.innerHTML = currentLokasi;
  pengalamanTarget.innerHTML = currentPengalaman;
  emailTarget.innerHTML = currentEmail;

  //set file to target
  //cek if file exist
  if (currentFile) {
    //buat instance file reader
    const reader = new FileReader();

    //set function onload saat filereader beres
    reader.onload = function (e) {
      imageTarget.src = e.target.result;
    };

    //pass the file to file reader
    reader.readAsDataURL(currentFile);
  }

  toggleEditForm();
}
