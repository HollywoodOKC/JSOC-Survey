const results = () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  document.write("<h1>Thank you operator for your time!</h1>");
  document.write("<p>Saving Survey.</p>");

  document.write("<h3>Here is a review of your answers:</h3>");

  document.write(name + "<br/>");
  document.write(email + "<br/>");
}
