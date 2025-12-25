const saveButton = document.getElementById("save-button");
const saveDialog = document.getElementById("save-dialog");
const closeDialog = document.getElementById("close-dialog");

saveButton.addEventListener("click", () => {
  saveDialog.showModal();
});

saveDialog.addEventListener("click", (e) => {
  if (e.target === saveDialog) {
    saveDialog.close();
  }
});
