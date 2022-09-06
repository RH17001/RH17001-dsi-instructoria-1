import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  originPath: string;
  destinationPath: string;
}

export const command: string = 'copy <originPath> [destinationPath]';
export const desc: string = 'Copiando al cat';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.positional('originPath', { type: 'string', demandOption: true })
    .positional('destinationPath', { type: 'string', default: '' });

export const handler = (argv: Arguments<Options>): void => {
  const { originPath, destinationPath } = argv;
  const fs = require('fs');
  fs.readFile(originPath, 'utf8', (err: any, data: any) => {
    if (err) {
      console.error(err);
      return;
    }
    if (destinationPath !== '') {
      fs.writeFile(destinationPath, data, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
        process.exit(0);
      });
    } else {

      const path = require('path');
      const baseName = path.basename(originPath).split('.').shift();
      const extension = path.extname(originPath);
      fs.writeFile(`${baseName}-copy${extension}`, data, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
        process.exit(0);
      });
    }
  });
}