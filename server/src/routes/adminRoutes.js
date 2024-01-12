// adminRoutes.js

const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Rutas protegidas para el administrador
router.use(authMiddleware.isAdmin);

router.get('/tasks', adminController.getTasks);
// Otras rutas específicas del administrador

module.exports = router;
