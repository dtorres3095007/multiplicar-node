const {
  argv
} = require('./config/yargs')

const {
  CrearArchivo,
  ListarTabla
} = require("./multiplicar/multiplicar")

let comando = argv._[0];
switch (comando) {
  case "listar":
    ListarTabla(argv.base, argv.limite).then(data => console.log(data));
    break;
  case "crear":
    CrearArchivo(argv.base, argv.limite)
      .then(nombre => console.log(nombre))
      .catch(err => console.log(err));
    break;
  default:
    console.log("NO SE RENOCOCE");
    break;
}
