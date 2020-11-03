const mongoose = require('mongoose');

const { DB_HOST, DB_NAME } = process.env;
const MONGODB_URI = `mongodb://${DB_HOST}/${DB_NAME}`;

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
  .then(() => console.log('Database is connected'))
  .catch(error => console.log(error));