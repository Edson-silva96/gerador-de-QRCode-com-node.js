import 'dotenv/config';
import prompt from 'prompt';
 // carrega .env corretamente

import mainPrompt from './prompt/prompt-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
    prompt.start();

    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.error(err);
            return;
        }

        if (choose.select === '1') {
            await createQRCode();
        } else if (choose.select === '2') {
            await createPassword();
        } else {
            console.log("Opção inválida.");
        }
    });
}

main();
