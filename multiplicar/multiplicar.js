const fs = require('fs');
const colors = require('colors');

let CrearArchivo = async (base, limite) => {
  let data = '';
  if (!Number(base)) throw new Error(`La base ${base} no es valida`);
  for (let index = 1; index <= limite; index++) {
    data += `${base} * ${index}= ${base * index}\n`;

  }

  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw new Error(Err);
  });
  return `tabla-${base} Guardado!`.red;
}

let ListarTabla = async (base, limite) => {
  console.log('=============================='.green);
  console.log(`Tabla de ${ base }`.green);
  console.log('=============================='.green);
  let data = "";
  for (let index = 1; index <= limite; index++) {
    data += `${base} * ${index} = ${base * index}\n`;

  }
  return data;
}

module.exports = {
  CrearArchivo,
  ListarTabla
}
