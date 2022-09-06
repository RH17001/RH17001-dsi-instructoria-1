"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = 'copy <originPath> [destinationPath]';
exports.desc = 'Copiando al cat';
const builder = (yargs) => yargs.positional('originPath', { type: 'string', demandOption: true })
    .positional('destinationPath', { type: 'string', default: '' });
exports.builder = builder;
const handler = (argv) => {
    const { originPath, destinationPath } = argv;
    const fs = require('fs');
    const path = require('path');
    const baseName = path.basename(originPath).split('.').shift();
    const extension = path.extname(originPath);
    fs.readFile(originPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        if (destinationPath === '') {
            fs.writeFile(`${baseName}-copy${extension}`, data, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                process.exit(0);
            });
        }
        else {
            fs.stat(destinationPath, (err, stats) => {
                if (!err) {
                    fs.writeFile(`${destinationPath}/${baseName}${extension}`, data, (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        process.exit(0);
                    });
                }
                else {
                    fs.writeFile(`${destinationPath}`, data, (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        process.exit(0);
                    });
                }
            });
        }
    });
};
exports.handler = handler;
