const results = () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let age = document.getElementById('age').value;
  let bully = doument.getElementById('bully').value;
  let task = document.getElementById('task').value;
  let motivation = document.getElementById('motivation').value;

  if (document.getElementById('recommend-1').checked) {
    poll = document.getElementById('recommend-1').value;
  } else if (document.getElementById('recommend-2').checked) {
    poll = document.getElementById('recommend-2').value;
  } else {
    poll = document.getElementById('recommend-3').value;
  }


  let comments = document.getElementById('comment').value;

  document.write("<h1>Thank you operator!</h1>");
  document.write("<h3>Here is a copy of your data:</h3>");

  document.write(name + "<br/>");
  document.write(email + "<br/>");
  document.write(age + "<br/>");
  document.write(bully + "<br/>");
  document.write(task + "<br/>");
  document.write(motivation + "<br/>");
  document.write(poll + "<br/>");
  document.write(comments);
}
