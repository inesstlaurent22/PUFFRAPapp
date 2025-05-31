const express = require('express');
const router = express.Router();
const Adresse = require('../models/Adresse');

// GET avec filtres
router.get('/', async (req, res) => {
  const { metier, code_postal, note } = req.query;

  let filtre = {};
  if (metier) filtre.metier = metier;
  if (code_postal) filtre.code_postal = code_postal;
  if (note) filtre.note = { $gte: Number(note) };

  try {
    const adresses = await Adresse.find(filtre);
    res.json(adresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
