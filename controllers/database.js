// .controllers/database.js
const Scholar = require("../models/database");

const getScholars = async (req, res) => {
    try {
        const scholars = await Scholar.find();
        res.status(200).json(scholars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createScholar = async (req, res) => {
    try {
        const { name, degree, researchArea, imageUrl } = req.body;

        const newScholar = new Scholar({ name, degree, researchArea, imageUrl });
        await newScholar.save();

        res.status(201).json({ message: "Scholar created successfully", scholar: newScholar });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateScholar = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, degree, researchArea, imageUrl } = req.body;

        const scholar = await Scholar.findByIdAndUpdate(id, { name, degree, researchArea, imageUrl }, { new: true });

        if (!scholar) {
            return res.status(404).json({ message: "Scholar not found" });
        }

        res.status(200).json({ message: "Scholar updated successfully", scholar });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getScholars, createScholar, updateScholar };
