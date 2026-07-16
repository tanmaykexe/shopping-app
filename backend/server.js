require("dotenv").config();

const express = require("express");
const cors = require("cors")
const db = require("./config/db");

const healthRoute = require("./routes/health");
const productRoute = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoute);
app.use("/products", productRoute);

const PORT = process.env.PORT || 5000;

function connectDatabase() {
    db.getConnection((err, connection) => {

        if (err) {
            console.log("Waiting for MySQL...");
            setTimeout(connectDatabase, 3000);
            return;
        }

        console.log("Connected to MySQL!");

        connection.release();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
}

connectDatabase();
