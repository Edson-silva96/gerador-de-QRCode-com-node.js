import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold( "escolha a ferramenta (1) gerar QR Code, (2) passoword"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default mainPrompt;