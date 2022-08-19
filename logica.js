const formularioUi = document.querySelector("#formulario");
const usuarios = [];

const registro = (nombre, email, password) => {
  let datos = {
    nombre: nombre,
    email: email,
    password: password,
  };

  usuarios.push(datos);

  return datos;
};

const guardarDB = () => {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};
formularioUi.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  registro(nombre, email, password);
  guardarDB();

  formularioUi.reset();
});

const login = () => {
  let datos = JSON.parse(localStorage.getItem("usuarios"));

  console.log(datos.nombre)

  let username = document.getElementById("username").value;
  let contrasenia = document.getElementById("contrasenia").value;



  if (username === datos.nombre && contrasenia === datos.password) {
    alert("Bienvenido");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
};

