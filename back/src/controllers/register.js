const { User } = require('../DB_connection');
const cryptoHelper = require('../utils/cryptoHelper');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid'); // Para generar tokens únicos, necesitarás instalar uuid (npm install uuid)

// Configura tu transporter de nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // O tu servicio de correo
  auth: {
    user: 'tu_email@gmail.com', // Tu dirección de correo
    pass: 'tu_contraseña' // Tu contraseña
  }
});


async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Faltan datos obligatorios." });
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: "El email ya está registrado." });
        }

        const hashedPassword = await cryptoHelper.hashPassword(password);

        // Generar token de validación
        const validationToken = uuidv4();
        
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            validationToken: validationToken, // Añadir un campo validationToken a tu modelo User
            isValidated: false // Añadir un campo isValidated a tu modelo User
        });

        // Crear enlace de validación
        const validationLink = `http://localhost:3000/validate-email?token=${validationToken}`; // Reemplaza localhost:3000 con la URL de tu frontend

        // Configurar y enviar email de validación
        const mailOptions = {
          from: 'tu_email@gmail.com',
          to: email,
          subject: 'Valida tu cuenta',
          text: `Haz clic en el siguiente enlace para validar tu cuenta: ${validationLink}`,
          html: `<p>Haz clic en el siguiente enlace para validar tu cuenta: <a href="${validationLink}">${validationLink}</a></p>`
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.error("Error al enviar email:", error);
          } else {
            console.log('Email enviado: ' + info.response);
          }
        });

        // Redirigir al frontend (esto generalmente se hace en el frontend después de recibir una respuesta exitosa)
        // Sin embargo, si realmente quieres redirigir desde el backend, puedes usar:
        res.redirect(`http://localhost:3001/check-email`); // Reemplaza localhost:3001 con la URL de tu frontend donde tienes la página "revisa tu email"
        // **Nota:** La redirección desde el backend no es la práctica más común para APIs REST. Generalmente, el frontend maneja la navegación después de recibir la respuesta del backend.

    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Ocurrió un error al intentar registrar el usuario." });
    }
}

module.exports = createUser;
