const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello'));

// export router in order to use it
module.exports = router; 