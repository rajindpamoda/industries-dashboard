const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Express Middleware
app.use(express.json());
app.use(cors());

app.get("/api/v1/data", (req, res) => {
    try {
        const data = require("./data/data.json");
        res.json(data);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});