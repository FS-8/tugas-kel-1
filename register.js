function register(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("pass").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const data = {
    firstname: firstName,
    last_name: lastName,
    username: username,
    password: password,
    email: email,
  };

  const url = new URL("https://652c0692d0d1df5273ef0d3c.mockapi.io/v1/login");

  // console.log(url0);

  fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      // if (data.length > 0 && validateLogin(username, password, data[0])) {
      //   console.log(data[0]);
      //   window.location.replace('index.html');
      // } else {
      //   console.log('pass salah');
      // }
      window.location.replace("login.html");
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// function test() {
// location.replace('index.html');
// }

function validateLogin(username, password, data) {
  if (username != data.username) {
    return false;
  }

  if (password != data.password) {
    return false;
  }

  return true;
}
