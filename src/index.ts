import express from "express";
import subjectRouter from "./routes/subjects.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json());

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${req.method} | ${req.url} | ${timestamp}`);
    next();
});

app.use('/api/subjects', subjectRouter);

app.listen(PORT, () => {
    console.log(`SERVER running on PORT${PORT}`);
});
