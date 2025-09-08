console.log("=== Inicio del sistema ===");
//mide tiempo de ejecución
console.time("ProcesoPrincipal");
//acá cuenta la cantidad de acceso
function accesoUsuario(usuario) {
  console.count(`Acceso de usuario ${usuario}`);
}

accesoUsuario('Carlos');
accesoUsuario('Ana');
accesoUsuario('Carlos');
//muestra advertencia
console.warn("Capacidad de usuarios alcanzando el límite");
//muestra error
console.error("Error: No se pudo conectar a la base de datos");

const usuarios = [
  { nombre: "Carlos", rol: "Admin" },
  { nombre: "Ana", rol: "User" }
];

console.table(usuarios);

console.timeEnd("ProcesoPrincipal");

console.log("=== Fin del sistema ===");