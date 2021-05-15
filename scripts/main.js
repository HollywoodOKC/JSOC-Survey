const results = () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let age = document.getElementById('age').value;
  let bully = doument.getElementById('bully').value;
  let task = document.getElementById('task').value;

  // if (document.getElementById('role').selected = "Officer") {
  //   rank = document.getElementById('role').value;
  // } else if (document.getElementById('role').selected = "Warrant") {
  //   rank = document.getElementById('role').value;
  // } else if (document.getElementById('role').selected = "NCO") {
  //   rank = document.getElementById('role').value;
  // } else {
  //   rank = document.getElementById('role').value;
  // }

  if (document.getElementById('recommend1').checked) {
    poll = document.getElementById('recommend1').value;
  } else if (document.getElementById('recommend2').checked) {
    poll = document.getElementById('recommend2').value;
  } else {
    poll = document.getElementById('recommend3').value;
  }

  let comments = document.getElementById('comment').value;

  document.write("<h1>Thank you operator!</h1>");
  document.write("<h3>Here is a copy of your data:</h3>");

  document.write(name + "<br/>");
  document.write(email + "<br/>");
  document.write(age + "<br/>");
  document.write(task + "<br/>");
  document.write(comments + "<br/>");
  document.write(poll + "<br/>");
}
