const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5001;

const app = express();
const router = express.Router();

router.get('/', cors(), (req,res) => {
    res.json({ message: 'Hello Render!' });
});

app.use ('/', router);

app.listen(PORT, () => {
    console.log(`Serve running on ${PORT} `);
});

module.exports = app;