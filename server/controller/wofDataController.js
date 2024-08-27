// backend/controllers/wofDataController.js

const WofData = require('../models/wofDataModel');

// Obtener todos los elementos
exports.getAllWofDatas = async (req, res) => {
    try {
        const wofDatas = await WofData.find();
        res.json(wofDatas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo elemento
exports.createWofData = async (req, res) => {
  console.log(req.body); // Esto te ayudará a verificar si los datos se reciben correctamente en el backend

  const wofData = new WofData({
      name: req.body.name,
      title: req.body.title,
      story: req.body.story,
      type: req.body.type,
      range: req.body.range,
      movementSpeed: req.body.movementSpeed,
      Enchantment: req.body.Enchantment
  });

  try {
      const newWofData = await wofData.save();
      res.status(201).json(newWofData);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// Actualizar un elemento existente
exports.updateWofData = async (req, res) => {
    try {
        const updatedWofData = await WofData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedWofData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un elemento
exports.deleteWofData = async (req, res) => {
    try {
        await WofData.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
