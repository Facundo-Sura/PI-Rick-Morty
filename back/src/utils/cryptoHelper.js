const bcrypt = require('bcrypt');

const saltRounds = 10; // Número de rondas de sal. Un valor más alto hace el hash más seguro pero consume más recursos.

async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Error al hashear la contraseña.");
  }
}

// Puedes añadir otras funciones relacionadas con criptografía aquí en el futuro, como verificar contraseñas

module.exports = {
  hashPassword,
};
