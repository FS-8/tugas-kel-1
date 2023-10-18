function login(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('pass').value;

  const url = new URL('https://652c0692d0d1df5273ef0d3c.mockapi.io/v1/login');
  url.searchParams.append('username', username);
  // url.searchParams.append('password', password);

  // console.log(url);

  fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.length > 0 && validateLogin(username, password, data[0])) {
        console.log(data[0]);
        window.location.replace('index.html');
      } else {
        console.log('pass salah');
      }
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
