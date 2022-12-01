const PORT = 8080;

const express = require("express");

let app = express();

app.use(express.static("./"));

app.get(/^\/quiz\/.+$/, (req, res) => {
    res.redirect(req.url.slice(5));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
