const mongoose = require('mongoose');

const adresseSchema = new mongoose.Schema({
  nom: String,
  metier: String,
  adresse: String,
  code_postal: String,
  note: Number,
  description: String,
  contact: String
});

module.exports = mongoose.model('Adresse', adresseSchema);
