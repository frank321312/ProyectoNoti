var express = require('express');
var app = express();
var path = require('path');

const port = 8070;
const emailConfig = JSON.parse(process.env.DATOS_PRIVADOS);
console.log(emailConfig);
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Archivos_HTML/practicasFlex.html'))
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}/`);
});

// export MYSQL_CONNECTION_STRING=mysql://username:password@host:port/database
// Esto es solo un ejemplardo