// auth.js
// Sistema de autenticación local para N3X0 ID (versión demo)

function saveUser(email, password, name, uid) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.email === email)) {
    alert("User already exists.");
    return false;
  }
  users.push({ email, password, name, uid });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Account created successfully!");
  return true;
}

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    alert("Invalid credentials.");
    return false;
  }
  localStorage.setItem("loggedUser", JSON.stringify(user));
  return true;
}

function getLoggedUser() {
  return JSON.parse(localStorage.getItem("loggedUser"));
}

function logoutUser() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}