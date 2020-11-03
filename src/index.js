require('dotenv').config();
const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto', app.get('port'));
});