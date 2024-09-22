var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  let id = check.checked;
  if (id) {
    location.href = "sp/index.html"; // Redireccionar a la versión en español
  } else {
    location.href = "../index.html"; // Redireccionar a la versión en inglés
  }
}

// Mantener la funcionalidad original de cambio de idioma
