"use strict";

const checkNombre = () => {
  let nombre = document.getElementById("nombre");
  if (nombre.value.length == 0) {
    document.getElementById("nom-sec").innerHTML =
      "<div class='error'>Campo Nombre Requerido</div>";
    console.log(false);
    nombre.style.border = "2px solid #f50808";
    return false;
  } else if (!/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(nombre.value)) {
    document.getElementById("nom-sec").innerHTML =
      "<div class='error'>Debes ingresar de 4 a 30 letras</div>";
    console.log(false);
    nombre.style.border = "2px solid #f50808";
    return false;
  } else {
    document.getElementById("nom-sec").innerHTML = "Check";
    console.log(true);
    nombre.style.border = "2px solid #87cefa";
    return true;
  }
}

const checkApellido = () => {
  let apellido = document.getElementById("apellido");
  if (apellido.value.length == 0) {
    document.getElementById("ape-sec").innerHTML =
      "<div class='error'>Campo Apellido Requerido</div>";
    console.log(false);
    apellido.style.border = "2px solid #f50808";
    return false;
  } else if (!/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(nombre.value)) {
    document.getElementById("ape-sec").innerHTML =
      "<div class='error'>Debes ingresar de 4 a 30 letras</div>";
    console.log(false);
    apellido.style.border = "2px solid #f50808";
    return false;
  } else {
    document.getElementById("ape-sec").innerHTML = "Check";
    console.log(true);
    apellido.style.border = "2px solid #87cefa";
    return true;
  }
}

const checkTelefono = () => {
  let telefono = document.getElementById("telefono");
  if (telefono.value.length == 0) {
    document.getElementById("tel-sec").innerHTML =
      "<div class='error'>Campo Telefono Requerido</div>";
    console.log(false);
    telefono.style.border = "2px solid #f50808";
    return false;
  } else if (telefono.value.match(/\d/g).length === 7) {
    document.getElementById("tel-sec").innerHTML = "Check";
    console.log(true);
    telefono.style.border = "2px solid #87cefa";
    return true;
  } else {
    document.getElementById("tel-sec").innerHTML =
      "<div class='error'>Debe ingresar 7 digitos</div>";
    console.log(false);
    telefono.style.border = "2px solid #f50808";
    return false;
  }
}

const checkCorreo = () => {
  let email = document.getElementById("email");
  let regex = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,3})$/;
  if (email.value.length == 0 || email.value === "" || email.value === null) {
    document.getElementById("cor-sec").innerHTML =
    "<div class='error'>Campo Correo Requerido</div>";
    console.log(false);
    email.style.border = "2px solid #f50808";
    return false;
  } else if (regex.test(email.value)) {
    document.getElementById("cor-sec").innerHTML = "Check";
    console.log(true);
    email.style.border = "2px solid #87cefa";
    return true;
  } else {
    document.getElementById("cor-sec").innerHTML =
    "<div class='error'>Ingrese correo valido</div>";
    console.log(false);
    email.style.border = "2px solid #f50808";
    return false;
  }
}

const checkContrasena = () => {
  let validacion = document.getElementById("password");
  if (
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,25}$/gm.test(validacion.value)
  ) {
    document.getElementById("con-sec").innerHTML = "Clave segura!";
    console.log(true);
    validacion.style.border = "2px solid #87cefa";
    return true;
  } else {
    document.getElementById("con-sec").innerHTML =
      "<div class='error'>Debe ingresar una letra mayúscula, una minúscula, un número <br> y una longitud minima de 8 caracteres</div>";
    console.log(false);
    validacion.style.border = "2px solid #f50808";
    return false;
  }
}

const validate = () => {
  checkNombre();
  checkApellido();
  checkTelefono();
  checkCorreo();
  checkContrasena();
}

module.exports = {
  checkNombre,
  checkApellido,
  checkTelefono,
  checkCorreo,
  checkContrasena,
};
