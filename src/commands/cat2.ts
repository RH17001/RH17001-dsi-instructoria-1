import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  filePath: string;
}

export const command: string = 'cat2 <filePath>';
export const desc: string = 'Leer archivo e imprimir en consola el contenido';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.positional('filePath', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { filePath } = argv;
  const fs = require('fs');
  fs.readFile(filePath, 'utf8', (err: any, data: any) => {
    if (err) {
      console.error(err);
      return;
    }
    process.stdout.write(data);
    process.exit(0);
  });
}