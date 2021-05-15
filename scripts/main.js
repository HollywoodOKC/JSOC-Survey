const results = () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let age = document.getElementById('age').value;

  if (document.getElementById('recommend-1').checked) {
    poll = document.getElementById('recommend-1').value;
  } else if (document.getElementById('recommend-2').checked) {
    poll = document.getElementById('recommend-2').value;
  } else {
    poll = document.getElementById('recommend-3').value;
  }

  document.write("<h1>Thank you operator for your time!</h1>");
  document.write("<p>Saving Survey.</p>");

  document.write("<h3>Here is a review of your answers:</h3>");

  document.write(name + "<br/>");
  document.write(email + "<br/>");
  document.write(poll + "<br/>");
  document.write(age + "<br/>");
}
