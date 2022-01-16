const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 8888;

if (process.env.NODE_ENV === "production"){
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, './build', 'index.html'))
    })
} else {
    console.log('not production')
}

app.listen(port)