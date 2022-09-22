const {Router} = require('express');
const {featureFlags} = require("../controllers/featureFlags");

const router = Router();

router.get('/api/feature-flags', featureFlags)

module.exports = router;
