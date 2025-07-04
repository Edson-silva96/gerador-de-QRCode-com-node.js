import qr from 'qrcode-terminal';
import chalk from 'chalk';

async function handle(err, result) {
    if (err) {
        console.error('Erro na aplicaçao');   
    }

    const isSmall = result.type === '1';
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green(`QR Code gerado com sucesso!`));
        console.log(qrcode);
    });
    //const isTerminal = result.type === '2';
} 

export default handle;