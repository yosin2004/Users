let tbody = document.querySelector(".tbody");
const getUsers = async () => {
  try {
    const response = await fetch("https://62726b39c455a64564c0d314.mockapi.io/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getUsers();