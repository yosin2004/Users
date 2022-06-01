let tbody = document.querySelector(".tbody");
const getUsers = async () => {
  try {
    const response = await fetch("https://62726b39c455a64564c0d314.mockapi.io/users");
    const data = await response.json();
    console.log(data);
    data.forEach((elem) => {
        let tr = document.createElement("tr")
        let id = document.createElement("td")
        id.innerHTML = elem.id
        let createdAt = document.createElement("td")
        createdAt.innerHTML = elem.createdAt.slice(0,10)
        let name = document.createElement("td")
        name.innerHTML = elem.name
        let age = document.createElement("td")
        age.innerHTML = elem.age
        let email = document.createElement("td")
        email.innerHTML = elem.email
        let phone = document.createElement("td")
        phone.innerHTML = elem.phone
        
        tr.appendChild(id)
        tr.appendChild(createdAt)
        tr.appendChild(name)
        tr.appendChild(age)
        tr.appendChild(email)
        tr.appendChild(phone)
        tbody.appendChild(tr)
    })
  } catch (error) {
    console.error(error);
  }
};

getUsers();