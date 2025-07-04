import chalk from "chalk";



const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link que deseja gerar o QR Code"),
    },
    {
        name:"type",
        description: chalk.yellow("Digite o tipo qrcode (1- normal ou 2- terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("escolha apenas entre 1 e 2"),
        required: true,
    }
];

export default promptQRCode;