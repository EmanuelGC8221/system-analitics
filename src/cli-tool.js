import { mostrarMenu} from "./app.js";

export function iniciarCLI() {
console.log('Bienvenido a la CLI de ejemplo');
console.log('Comandos disponibles: hola, tiempo, salir');

process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  const input = data.trim().toLowerCase();

  switch (input) {
    case 'hola':
      console.log('¡Hola! ¿Cómo estás?');
      break;
    case 'tiempo':
      console.log(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
      break;
    case 'salir':
      console.log('Saliendo de cli🚨');
      process.stdin.removeAllListeners("data"); // detener CLI
        mostrarMenu(); // regresar al menú principal
      return; //corta todo de la función cli
      
    default:
      console.log('Comando no reconocido');
  }

  process.stdout.write('Ingresa un nuevo comando: ');
});

}

