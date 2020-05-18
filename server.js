const express = require('express');

const app = express();
const sourceDir = 'dist';
const port = process.env.PORT || 3000;

app.use(express.static(sourceDir));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log(`Serving content from /${sourceDir}/`);
});
