"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = 'cat2 <filePath>';
exports.desc = 'Leer archivo e imprimir en consola el contenido';
const builder = (yargs) => yargs.positional('filePath', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { filePath } = argv;
    const fs = require('fs');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        process.stdout.write(data);
        process.exit(0);
    });
};
exports.handler = handler;
