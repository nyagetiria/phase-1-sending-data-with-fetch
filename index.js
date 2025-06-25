// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json())
    .then(data => {
      const body = document.querySelector("body");
      body.innerHTML += `<p>ID: ${data.id}</p>`;
    })
    .catch(error => {
      const body = document.querySelector("body");
      body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { submitData };
}

