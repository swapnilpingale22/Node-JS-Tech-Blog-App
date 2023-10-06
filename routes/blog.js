const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
});
router.get('/explore', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/explore.html'))
});
router.get('/android', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/android.html'))
});
router.get('/windows', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/windows.html'))
});
router.get('/aiml', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/aiml.html'))
});
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/about.html'))
});

module.exports = router;