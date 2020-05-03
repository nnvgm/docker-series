const mongoose = require('mongoose');

async function ConnectDB(mongoURL) {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connect to ${mongoURL}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = ConnectDB;
