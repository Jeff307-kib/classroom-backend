import express from "express";

const PORT = 8000;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${req.method} | ${req.url} | ${timestamp}`);
});

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`SERVER running on PORT${PORT}`);
});