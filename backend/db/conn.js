const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://felipe:ngVItEXBqf4zD5p3@cluster0.v7y5uvc.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
