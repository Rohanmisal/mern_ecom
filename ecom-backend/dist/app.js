import express from "express";
// Importing Routes
import userRoute from "./routes/user.js";
const port = 3000;
const app = express();
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`);
});
