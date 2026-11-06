const express = require("express")

const app = express();

app.use(express.json());

// Sample users
const users = [
    {
        id: 1,
        name: "Vijay",
        role: "Backend Developer",
    },
    {
        id: 2,
        name: "Ajay",
        role: "Frontend Developer",
    }
];

// Health check API
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy",
    });
});

// Get all users API
app.get("/api/users", (req,res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

module.exports = app;