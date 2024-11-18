const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 4000;
const moongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

moongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('연결완료');
    })
    .catch(err => {
        console.error(err);
    });

app.get('/', (req, res) => {
    res.send('Hello World!  ddddaa');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send(error.message || '서버에서 에러가 발생했습니다.')
})

app.use(express.static(path.join(__dirname, '../uploads')));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});