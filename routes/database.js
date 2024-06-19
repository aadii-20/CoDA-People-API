// routes/ScholarRoutes.js
const express = require('express');
const { getScholars, createScholar, updateScholar } = require('../controllers/database');

const router = express.Router();


router.route('/scholars')
    .get(getScholars)
    .post(createScholar);

router.put('/scholars/:id', updateScholar);

module.exports = router;
