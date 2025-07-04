import permittedCharacters from './permittedCharacters.js';

async function handle() {
  let password = "";

  const passwordLength = Number(process.env.PASSWORD_LENGTH) || 12;
  const characters = await permittedCharacters();

  if (characters.length === 0) {
    console.log("Nenhum tipo de caractere permitido foi configurado. Verifique seu .env");
    return "";
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;
