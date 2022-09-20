const db = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MongoDBUri;

const connectDB = async () => {
  await db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'contacts_db'
  });
  console.log('DB connected, wohooo!');
}

module.exports = connectDB;
