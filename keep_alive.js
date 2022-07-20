const express = require('express');
const app = express();
const port = 2320;
app.get('/', (req, res) => res.send('Ghostmusic ist online, Boyzzzzzz'));

app.listen(port, () => console.log(`Ghostmusic ist jetzt auf http://localhost:${port}`));