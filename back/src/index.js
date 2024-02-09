const server = require("./app");
const { conn } = require("./DB_connection");
require('dotenv').config();

const { PORT } = process.env;
//Sincronizar la instancia de "Sequelize" al servidor
server.listen(PORT, async () => {
   await conn.sync({ force:false })
   console.log(`Server raised in port: ${PORT}`);
});