//principal
import { registroSistema } from "./registro-sistema.js";
import { iniciarCLI } from "./cli-tool.js";
import { iniciarMonitor } from "./system-monitor.js";

export function mostrarMenu() {
console.log("Bienvenido a system-analitics");
console.log("Opciones disponibles: 'registro', 'cli', 'monitor', 'salir'");

process.stdin.setEncoding("utf-8");
process.stdin.on("data", (input) => {
  const opcion = input.trim().toLowerCase();

  switch (opcion) {
    case "registro":
      registroSistema();
      console.log(" Escribe otra opción: 'registro', 'cli', 'monitor', 'salir'");
      break;

    case "cli":
        process.stdin.removeAllListeners("data"); // quitamos el listener del menú principal
      iniciarCLI();
      break;

    case "monitor":
      iniciarMonitor();
      console.log(" Escribe otra opción: 'registro', 'cli', 'monitor', 'salir'");
      break;

    case "salir":
      console.log(" 🔒Cerrando system-analitics");
      process.exit(0);

    default:
      console.log(" Opción no válida. Usa: 'registro', 'cli', 'monitor' o 'salir'");
  }

  
});
}
mostrarMenu();

