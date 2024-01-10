document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting in the default way

  const formData = new FormData(this); // 'this' refers to the form being submitted

  // when your using checkboxes or multi option answer in a form for a key that time you use formData.entries()/ formData.values()
  // else other times directly to get the values you can use formData.get('id')(given in form input)
  const name = formData.get("name");
  const email = formData.get("email");

  console.log(name, email);
});
