document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.getElementById("contactFormContainer");
  const showFormButton = document.getElementById("showFormButton");
  const closeFormButton = document.getElementById("closeFormButton");

  showFormButton.addEventListener("click", function () {
    formContainer.style.display = "block";
  });

  closeFormButton.addEventListener("click", function () {
    formContainer.style.display = "none";
  });
});
