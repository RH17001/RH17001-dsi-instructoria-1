import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  message: string;
  upper: boolean | undefined;
};

export const command: string = 'echo2 <message>';
export const desc: string = 'Utilidad para mostrar un mensaje';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      upper: { type: 'boolean' },
    })
    .positional('message', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { message, upper } = argv;
  const final = `${message}\n`;
  process.stdout.write(upper ? final.toUpperCase() : final);
  process.exit(0);
};