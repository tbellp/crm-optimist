const form = document.getElementById("form-cliente");
const lista = document.getElementById("lista-clientes");

let clientes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  const cliente = { nombre, email, telefono };
  clientes.push(cliente);
  render();
  form.reset();
});

function render() {
  if (clientes.length === 0) {
    lista.innerHTML = "<li>No hay clientes aún.</li>";
    return;
  }
  lista.innerHTML = clientes
    .map(
      (c) =>
        `<li><strong>${c.nombre}</strong> — ${c.email}${c.telefono ? ` — ${c.telefono}` : ""}</li>`
    )
    .join("");
}

render();
