"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = 'echo2 <message>';
exports.desc = 'Copiando al echo';
const builder = (yargs) => yargs
    .options({
    upper: { type: 'boolean' },
})
    .positional('message', { type: 'string', demandOption: true });
exports.builder = builder;
const handler = (argv) => {
    const { message, upper } = argv;
    const final = `${message}\n`;
    process.stdout.write(upper ? final.toUpperCase() : final);
    process.exit(0);
};
exports.handler = handler;
